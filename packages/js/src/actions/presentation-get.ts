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
 * Read a presentation's slides and the objectId of every element on them --
 * the prerequisite for targeting a specific shape or placeholder with a future
 * edit.
 *
 * GET /v1/presentations/{presentationId} —
 * https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/get
 *
 * Notice what is NOT here: no key, no base URL, no mode check, no retry loop,
 * no fake/real branch. This describes the request; callConnector resolves the
 * connection, picks the estate, and either calls Google Slides or calls the
 * faker.
 */

import {
  callConnector,
  type ConnectorResult,
  type RequestedMode,
  type Transport,
} from "@particle-academy/fancy-connector-core";
import { GOOGLE_SLIDES } from "../service.js";

export const PRESENTATION_GET_OPERATION = "presentation_get";

export type PresentationGetOptions = {
  /** The node's resolved config. Keys: presentationId. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function googleSlidesPresentationGet(options: PresentationGetOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (config.presentationId === undefined || config.presentationId === null || config.presentationId === "") {
    throw new Error(`presentation_get: "presentationId" is required (Presentation ID).`);
  }

  return callConnector(GOOGLE_SLIDES, {
    operation: PRESENTATION_GET_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "GET",
      path: `/v1/presentations/${encodeURIComponent(String(config.presentationId))}`,
      query: {},
    },
  });
}
