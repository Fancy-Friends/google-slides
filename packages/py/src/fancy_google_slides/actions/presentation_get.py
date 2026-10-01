# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/presentation-get.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/presentation-get.json (or weaver's template/) and
# regenerate:
#
# npm run provider -- google_slides

"""Read a presentation's slides and the objectId of every element on them --
the prerequisite for targeting a specific shape or placeholder with a future
edit.

GET /v1/presentations/{presentationId} —
https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/get

This describes the request. `call` resolves the connection, picks the
estate, and either calls Google Slides or calls the faker.
"""

from __future__ import annotations

from typing import Any
from urllib.parse import quote

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "presentation_get"
METHOD = "GET"
PATH = "/v1/presentations/{presentationId}"
SIDE_EFFECTS = "none"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the form body for one call, failing loudly and specifically."""
    if config.get("presentationId") is None or config.get("presentationId") == "":
        raise ConnectorConfigError(
            "presentation_get: \"presentationId\" is required (Presentation ID)."
        )

    out: dict[str, Any] = {}

    return out



def path(config: dict[str, Any]) -> str:
    """The request path, with each config value URL-ENCODED into it.

    `PATH` above is the TEMPLATE, which is what the descriptor advertises;
    this is what a caller sends. A value interpolated raw changes WHICH URL is
    called — a range like `Sheet1!A:B`, or a sheet named `Q1/Q2` — and the
    provider answers 404 about the document rather than about the encoding.
    """
    return (
        "/v1/presentations/"
        + quote(str(config.get("presentationId") or ""), safe="")
    )

def presentation_get(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Read a presentation's slides and the objectId of every element on them -- the prerequisite
    for targeting a specific shape or placeholder with a future edit.
    """
    return call(
        descriptor(),
        operation=OPERATION,
        method=METHOD,
        path=PATH,
        form=body(config),
        config=config,
        credentials=credentials,
        mode=mode,
        connection_id=connection_id,
        attempts=attempts,
    )
