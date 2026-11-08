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
 * Replace every occurrence of a string in a presentation.
 *
 * POST /v1/presentations/{presentationId}:batchUpdate —
 * https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/batchUpdate
 *
 * Notice what is NOT here: no key, no base URL, no mode check, no retry loop,
 * no fake/real branch. This describes the request; callConnector resolves the
 * connection, picks the estate, and either calls Google Slides or calls the
 * faker.
 *
 * sideEffects: unsafe-to-replay.
 */

import {
  callConnector,
  type ConnectorResult,
  type RequestedMode,
  type Transport,
} from "@particle-academy/fancy-connector-core";
import { GOOGLE_SLIDES } from "../service.js";

export const TEXT_REPLACE_OPERATION = "text_replace";

export type TextReplaceOptions = {
  /** The node's resolved config. Keys: presentationId, find, replaceWith, matchCase, pageObjectIds, requiredRevisionId. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function googleSlidesTextReplace(options: TextReplaceOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (config.presentationId === undefined || config.presentationId === null || config.presentationId === "") {
    throw new Error(`text_replace: "presentationId" is required (Presentation ID).`);
  }

  if (config.find === undefined || config.find === null || config.find === "") {
    throw new Error(`text_replace: "find" is required (Find).`);
  }

  if (config.replaceWith === undefined || config.replaceWith === null || config.replaceWith === "") {
    throw new Error(`text_replace: "replaceWith" is required (Replace with).`);
  }

  return callConnector(GOOGLE_SLIDES, {
    operation: TEXT_REPLACE_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "POST",
      path: `/v1/presentations/${encodeURIComponent(String(config.presentationId))}:batchUpdate`,
      json: nestFields({
        "requests.0.replaceAllText.containsText.text": String(config.find),
        "requests.0.replaceAllText.replaceText": String(config.replaceWith),
        ...(config.matchCase !== undefined && config.matchCase !== null && config.matchCase !== "" ? { "requests.0.replaceAllText.containsText.matchCase": Boolean(config.matchCase) } : {}),
        ...(config.pageObjectIds !== undefined && config.pageObjectIds !== null && config.pageObjectIds !== "" ? { "requests.0.replaceAllText.pageObjectIds": requests0ReplacealltextPageobjectidsList(config.pageObjectIds) } : {}),
        ...(config.requiredRevisionId !== undefined && config.requiredRevisionId !== null && config.requiredRevisionId !== "" ? { "writeControl.requiredRevisionId": String(config.requiredRevisionId) } : {}),
      }),
    },
  });
}

/**
 * `{"properties.email": x}` -> `{properties: {email: x}}`.
 *
 * A dotted `as` means NESTING, and only a JSON body can nest. The validator
 * refuses that spelling anywhere else, because in a form body it already means
 * something different — a literal dotted key.
 */
function nestFields(flat: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};

  for (const [path, value] of Object.entries(flat)) {
    const parts = path.split(".");
    let node = out;

    while (parts.length > 1) {
      const key = parts.shift() as string;
      // A NUMERIC segment is an array index: `dateRanges.0.startDate` has to
      // become `[{startDate}]`, not `{"0": {startDate}}`. PHP produced the
      // array by accident (its integer-keyed arrays serialise as JSON lists)
      // and the other two produced an object, which the provider rejects as
      // the wrong type. The parity suite is what caught the disagreement.
      const wantsArray = /^\d+$/.test(parts[0] ?? "");

      if (typeof node[key] !== "object" || node[key] === null) node[key] = wantsArray ? [] : {};
      node = node[key] as Record<string, unknown>;
    }

    node[parts[0] as string] = value;
  }

  return out;
}

/** One value, a ","-separated string, or an array — all end up a list. */
function requests0ReplacealltextPageobjectidsList(value: unknown): string[] {
  const items = Array.isArray(value)
    ? value.map(String)
    : typeof value === "string"
      ? value.split(",")
      : [];

  return items.map((item) => item.trim()).filter(Boolean);
}
