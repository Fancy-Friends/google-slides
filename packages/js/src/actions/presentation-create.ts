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
 * Create a blank Google Slides presentation.
 *
 * POST /v1/presentations —
 * https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/create
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

export const PRESENTATION_CREATE_OPERATION = "presentation_create";

export type PresentationCreateOptions = {
  /** The node's resolved config. Keys: title. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function googleSlidesPresentationCreate(options: PresentationCreateOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (config.title === undefined || config.title === null || config.title === "") {
    throw new Error(`presentation_create: "title" is required (Title).`);
  }

  return callConnector(GOOGLE_SLIDES, {
    operation: PRESENTATION_CREATE_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "POST",
      path: "/v1/presentations",
      json: {
        "title": String(config.title),
      },
    },
  });
}
