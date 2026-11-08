/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/text-replace.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/text-replace.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_slides
 */

/**
 * Replace text in a Google Slides presentation — Replace every occurrence of a
 * string in a presentation.
 *
 * https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/batchUpdate
 *
 * `unsafe-to-replay`.
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { googleSlidesMeta } from "../service.js";

export const GOOGLE_SLIDES_TEXT_REPLACE_KIND = "@particle-academy/google_slides_text_replace";
export const GOOGLE_SLIDES_TEXT_REPLACE_OPERATION = "text_replace";

export const GOOGLE_SLIDES_TEXT_REPLACE_META = googleSlidesMeta("action", "replace text", "https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/batchUpdate");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const GOOGLE_SLIDES_TEXT_REPLACE_OUTPUT: OutputField[] = [
  {
    "path": "data.presentationId",
    "type": "string",
    "description": "The presentation updated."
  },
  {
    "path": "data.replies",
    "type": "array",
    "description": "One reply."
  },
  {
    "path": "data.replies.0.replaceAllText.occurrencesChanged",
    "type": "number",
    "description": "How many occurrences were replaced. 0 means the text was not found, which is not an error."
  },
  {
    "path": "data.writeControl.requiredRevisionId",
    "type": "string",
    "description": "The presentation's revision after the update."
  },
  {
    "path": "mode",
    "type": "string",
    "description": "Which estate this ran against. Google has no sandbox, so: fake or live."
  }
];

export const googleSlidesTextReplaceKind: NodeKindDefinition = defineConnectorKind(GOOGLE_SLIDES_TEXT_REPLACE_META, {
  name: GOOGLE_SLIDES_TEXT_REPLACE_KIND,
  aliases: ["google_slides_text_replace"],
  label: "Replace text in a Google Slides presentation",
  description: "Replace every occurrence of a string in a presentation.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "unsafe-to-replay",
  outputShape: GOOGLE_SLIDES_TEXT_REPLACE_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "presentationId",
      "label": "Presentation ID",
      "required": true,
      "description": "From presentation_create's data.presentationId, or the id in the presentation's own URL."
    },
    {
      "type": "text",
      "key": "find",
      "label": "Find",
      "required": true,
      "description": "The exact text to find, e.g. {{name}}. Not a regular expression."
    },
    {
      "type": "textarea",
      "key": "replaceWith",
      "label": "Replace with",
      "required": true,
      "description": "Inserted in place of every match. Empty is refused: to delete text, use batch_update."
    },
    {
      "type": "switch",
      "key": "matchCase",
      "label": "Match case",
      "default": false,
      "description": "Off matches case-insensitively, which is also what Google does when it is not sent."
    },
    {
      "type": "text",
      "key": "pageObjectIds",
      "label": "Only on slides",
      "description": "Optional. Slide objectIds, comma separated (from presentation_get). Empty means every slide."
    },
    {
      "type": "text",
      "key": "requiredRevisionId",
      "label": "Required revision ID",
      "description": "Optional. The presentation's revisionId as you last read it. If the presentation has changed since, Google refuses the whole batch with a 400 instead of applying it to content you have not seen."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(GOOGLE_SLIDES_TEXT_REPLACE_META, config as Record<string, unknown>, "replace text"),
});
