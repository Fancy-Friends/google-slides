/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/presentation-get.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/presentation-get.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_slides
 */

/**
 * Google Slides presentation — Read a presentation's slides and the objectId
 * of every element on them -- the prerequisite for targeting a specific shape
 * or placeholder with a future edit.
 *
 * https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/get
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { googleSlidesMeta } from "../service.js";

export const GOOGLE_SLIDES_PRESENTATION_GET_KIND = "@particle-academy/google_slides_presentation_get";
export const GOOGLE_SLIDES_PRESENTATION_GET_OPERATION = "presentation_get";

export const GOOGLE_SLIDES_PRESENTATION_GET_META = googleSlidesMeta("action", "read a presentation", "https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/get");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const GOOGLE_SLIDES_PRESENTATION_GET_OUTPUT: OutputField[] = [
  {
    "path": "data.presentationId",
    "type": "string",
    "description": "Echoes what was asked."
  },
  {
    "path": "data.title",
    "type": "string",
    "description": "The presentation's title."
  },
  {
    "path": "data.locale",
    "type": "string",
    "description": "BCP 47 language tag."
  },
  {
    "path": "data.slides",
    "type": "array",
    "description": "One entry per slide, in order: objectId, and pageElements -- each with its own objectId and exactly one of shape/image/table/line/video/wordArt/sheetsChart/elementGroup/speakerSpotlight set, naming what kind of element it is. A placeholder shape's text (when it has one) lives at pageElements[].shape.text, published raw -- this connector does not flatten Slides' own rich-text run structure."
  },
  {
    "path": "mode",
    "type": "string",
    "description": "Which estate this ran against. Google has no sandbox, so: fake or live."
  }
];

export const googleSlidesPresentationGetKind: NodeKindDefinition = defineConnectorKind(GOOGLE_SLIDES_PRESENTATION_GET_META, {
  name: GOOGLE_SLIDES_PRESENTATION_GET_KIND,
  aliases: ["google_slides_presentation_get"],
  label: "Google Slides presentation",
  description: "Read a presentation's slides and the objectId of every element on them -- the prerequisite for targeting a specific shape or placeholder with a future edit.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: GOOGLE_SLIDES_PRESENTATION_GET_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "presentationId",
      "label": "Presentation ID",
      "required": true,
      "description": "From presentation_create's data.presentationId, or the id in the presentation's own URL."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(GOOGLE_SLIDES_PRESENTATION_GET_META, config as Record<string, unknown>, "read a presentation"),
});
