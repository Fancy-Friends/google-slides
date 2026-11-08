/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/ + triggers/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/ + triggers/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_slides
 */

/**
 * Google Slides's node kinds with their TypeScript executors attached — for
 * hosts that EXECUTE on TS.
 *
 * The authoring surface in @particle-academy/google-slides-ui carries no
 * executor: the editor is React on every host, so a PHP or Python project
 * installs the ui package and never this one.
 */

import type { NodeExecutor, NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import {
  idempotencyKeyFor,
  NO_IDEMPOTENCY_KEY_WARNING,
  resolveConnection,
  triggerEvent,
  type RequestedMode,
} from "@particle-academy/fancy-connector-core";
import { GOOGLE_SLIDES } from "./service.js";

import {
  googleSlidesBatchUpdateKind,
  googleSlidesPresentationKind,
  googleSlidesPresentationGetKind,
  googleSlidesTextReplaceKind,
} from "@particle-academy/google-slides-ui";

import { googleSlidesBatchUpdate } from "./actions/batch-update.js";
import { googleSlidesPresentationCreate } from "./actions/presentation-create.js";
import { googleSlidesPresentationGet } from "./actions/presentation-get.js";
import { googleSlidesTextReplace } from "./actions/text-replace.js";

export const googleSlidesBatchUpdateExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await googleSlidesBatchUpdate({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `google_slides batch_update ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const googleSlidesPresentationExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await googleSlidesPresentationCreate({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `google_slides presentation_create ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const googleSlidesPresentationGetExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await googleSlidesPresentationGet({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `google_slides presentation_get ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const googleSlidesTextReplaceExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await googleSlidesTextReplace({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `google_slides text_replace ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

/** The kinds a TypeScript host registers. */
export const GOOGLE_SLIDES_RUNNABLE_KINDS: NodeKindDefinition[] = [
  { ...googleSlidesBatchUpdateKind, executor: googleSlidesBatchUpdateExecutor },
  { ...googleSlidesPresentationKind, executor: googleSlidesPresentationExecutor },
  { ...googleSlidesPresentationGetKind, executor: googleSlidesPresentationGetExecutor },
  { ...googleSlidesTextReplaceKind, executor: googleSlidesTextReplaceExecutor },
];
